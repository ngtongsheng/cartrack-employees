import L, { LatLng } from 'leaflet'
import { FC, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useEmployeeContext } from './context'
import 'leaflet/dist/leaflet.css'

const customMarker = L.icon({
  iconUrl: '/marker.svg',
  iconSize: [48, 48],
  iconAnchor: [24, -10]
})

const Map: FC = () => {
  const [state] = useEmployeeContext()
  const [position, setPosition] = useState<LatLng>()
  const { employee } = state

  useEffect(() => {
    if (employee) {
      setPosition(
        new LatLng(
          parseInt(employee?.address.geo.lat || '0', 10),
          parseInt(employee?.address.geo.lng || '0', 10)
        )
      )
    }
  }, [employee])

  return (
    <div style={{ position: 'relative' }}>
      {position && (
        <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={customMarker} position={position}>
            <Popup>{employee?.address.city}</Popup>
          </Marker>
        </MapContainer>
      )}
      <style jsx global>{`
        .leaflet-container {
          height: 500px;
        }
      `}</style>
    </div>
  )
}

export default Map
