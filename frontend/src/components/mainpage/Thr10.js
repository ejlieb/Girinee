/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/thr10.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
      <lineSegments geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
      <lineSegments geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
      <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
      <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
      <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
      <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
      <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
      <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
      <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
      <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
      <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
      <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
      <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
      <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
      <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
      <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
      <lineSegments geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
      <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
      <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
      <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
      <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
      <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
      <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
      <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
    </group>
  )
}

useGLTF.preload('/thr10.glb')
