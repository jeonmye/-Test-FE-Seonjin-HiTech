'use client'

import React, { useEffect, useRef } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

// Google Maps API 로드 상태 렌더링
const render = status => {
  if (status === Status.LOADING) return <div>Loading...</div>
  if (status === Status.FAILURE) return <div>Error loading maps</div>
  return null
}

const GoogleMap = ({ center, zoom, markers, size }) => {
  const mapRef = useRef(null)

  useEffect(() => {
    let map

    if (mapRef.current && window.google) {
      // 지도 생성
      map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom
      })

      // 마커 추가
      markers.forEach(({ position, title }) => {
        new window.google.maps.Marker({
          position,
          map,
          title
        })
      })
    }
  }, [center, zoom, markers])

  return (
    <div
      ref={mapRef}
      className={size}
    />
  )
}

const GoogleMapWrapper = ({ size }) => {
  const center = { lat: 37.083514, lng: 126.908973 }
  const zoom = 17

  // 마커 데이터
  const markers = [
    {
      position: { lat: 37.083514, lng: 126.908973 },
      title: '선진하이텍'
    }
  ]
  const sizevarient = {
    l: 'w-[500px] h-[500px]',
    m: 'w-[400px] h-[400px]',
    s: 'w-[350px] h-[350px]'
  }
  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}
      render={render}>
      <GoogleMap
        size={sizevarient[size]}
        center={center}
        zoom={zoom}
        markers={markers}
      />
    </Wrapper>
  )
}

export default GoogleMapWrapper
