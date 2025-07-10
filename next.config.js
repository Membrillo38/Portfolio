const nextConfig = {
    experimental: {
      // Añade aquí solo opciones experimentales válidas según la documentación actual
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    // Elimina "optimization" y "future"
  };
  
  module.exports = nextConfig;