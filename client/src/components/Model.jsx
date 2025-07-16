import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Robot } from './Robot'
import { useRef, useState, useEffect } from 'react'
import { useThree } from '@react-three/fiber'

const RotatingGroup = ({ children, ...props }) => {
    const groupRef = useRef()
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.02 // Adjust speed as needed
        }
    })
    return (
        <group ref={groupRef} {...props}>
            {children}
        </group>
    )
}

const Model = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let modelScale = 0.5;
    let cameraPosition = [0, 0, 15];
    let minMaxDistance = 25;
    if (isMobile) {
        modelScale = 0.8;
        cameraPosition = [0, 0, 10];
        minMaxDistance = 12;
    } else if (isTablet) {
        modelScale = 0.6;
        cameraPosition = [0, 0, 12];
        minMaxDistance = 18;
    }

    // Responsive fit: make Canvas fill parent
    const canvasStyle = { width: '100%', height: '100%' };

    // Optionally, adjust fov for extra fit
    let fov = 15;
    if (isMobile) fov = 22;
    else if (isTablet) fov = 18;

    return (
        <Canvas camera={{ position: cameraPosition, fov }} style={canvasStyle} >
            <ambientLight position={[1, 1, 1]} intensity={2} />
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={minMaxDistance}
                minDistance={minMaxDistance}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
            <RotatingGroup
                scale={modelScale}
                position={[0, 0, 0]}
            >
                <Robot />
            </RotatingGroup>
        </Canvas>
    )
}

export default Model