
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
    
    // Create connections between some nodes
    for (let i = 0; i < nodes.length; i++) {
      const connections = Math.floor(Math.random() * 3) + 1; // More connections
      
      for (let j = 0; j < connections; j++) {
        const target = Math.floor(Math.random() * nodes.length);
        if (i !== target) {
          const connection = document.createElement('div');
          connection.className = 'connection';
          container.appendChild(connection);
          
          // Position and animate the connection
          const updateConnection = () => {
            const node1Rect = nodes[i].getBoundingClientRect();
            const node2Rect = nodes[target].getBoundingClientRect();
            
            const x1 = node1Rect.left + node1Rect.width / 2 - containerRect.left;
            const y1 = node1Rect.top + node1Rect.height / 2 - containerRect.top;
            const x2 = node2Rect.left + node2Rect.width / 2 - containerRect.left;
            const y2 = node2Rect.top + node2Rect.height / 2 - containerRect.top;
            
            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            
            connection.style.width = `${length}px`;
            connection.style.left = `${x1}px`;
            connection.style.top = `${y1}px`;
            connection.style.transform = `rotate(${angle}deg)`;
          };
          
          // Initial position
          updateConnection();
          
          // Update on animation frames
          const updateInterval = setInterval(updateConnection, 100);
          
          // Cleanup
          return () => clearInterval(updateInterval);
        }
      }
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
