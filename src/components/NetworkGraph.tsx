
import React, { useEffect, useRef } from 'react';

interface NetworkGraphProps {
  enabled: boolean;
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ enabled }) => {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphRef.current || !enabled) return;
    
    // Clear any existing nodes and connections
    if (graphRef.current.hasChildNodes()) {
      while (graphRef.current.firstChild) {
        graphRef.current.removeChild(graphRef.current.firstChild);
      }
    }

    if (!enabled) return;
    
    // Create nodes
    const nodeCount = 50; // Increased number of nodes for fuller coverage
    const nodes = [];
    const container = graphRef.current;
    const containerRect = container.getBoundingClientRect();
    
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      const size = Math.random() * 6 + 3;
      
      node.className = `node ${
        Math.random() > 0.7
          ? Math.random() > 0.5
            ? 'node-alt'
            : 'node-teal'
          : ''
      }`;
      
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.left = `${Math.random() * 100}%`;
      node.style.top = `${Math.random() * 100}%`;
      node.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(node);
      nodes.push(node);
      
      // Animation
      const duration = Math.random() * 20000 + 15000; // 15-35 seconds
      const keyframes = [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px)` },
        { transform: `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px)` },
        { transform: 'translate(0, 0)' }
      ];
      
      node.animate(keyframes, {
        duration,
        iterations: Infinity
      });
    }
  }, [enabled]);

  return (
    <div 
      ref={graphRef} 
      className={`fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-50 ${!enabled ? 'hidden' : ''}`}
    />
  );
};

export default NetworkGraph;
