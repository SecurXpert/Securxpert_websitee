import os from 'os';

// Get local network IPs dynamically to prevent Next.js from blocking dev access
const getLocalNetworkIPs = () => {
  const interfaces = os.networkInterfaces();
  const allowedOrigins = [];
  let mainIP = '127.0.0.1';

  for (const interfaceName of Object.keys(interfaces)) {
    for (const iface of interfaces[interfaceName]) {
      // Get non-internal IPv4 addresses
      if (iface.family === 'IPv4' && !iface.internal) {
        const ip = iface.address;
        mainIP = ip;
        allowedOrigins.push(ip);
        // Include common development ports
        allowedOrigins.push(`${ip}:3000`);
        allowedOrigins.push(`${ip}:3001`);
        allowedOrigins.push(`${ip}:3002`);
        allowedOrigins.push(`${ip}:3003`);
        allowedOrigins.push(`${ip}:3004`);
        allowedOrigins.push(`${ip}:3005`);
      }
    }
  }

  return allowedOrigins;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: getLocalNetworkIPs(),
};

export default nextConfig;
