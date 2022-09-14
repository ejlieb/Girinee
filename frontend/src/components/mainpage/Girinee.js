/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Logo(props) {
  const { nodes, materials } = useGLTF('/girinee.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
        <meshStandardMaterial emissive={'red'} emissiveIntensity={15}></meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
      <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
      <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
      <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
      <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
      <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
      <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
    </group>
  )
}

useGLTF.preload('/girinee.glb')