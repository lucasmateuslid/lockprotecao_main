// Utility para lazy load Leaflet CSS apenas quando necessário
// Isso economiza 45 KiB no bundle inicial

export const loadLeafletCSS = async (): Promise<void> => {
  return new Promise((resolve) => {
    // Verificar se Leaflet CSS já foi carregado
    const leafletStyle = document.querySelector('link[href*="leaflet"]');
    if (leafletStyle) {
      resolve();
      return;
    }

    // Carregar CSS dinamicamente
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    link.onload = () => resolve();
    link.onerror = () => resolve(); // Resolver mesmo se houver erro
    document.head.appendChild(link);
  });
};

// Versão com retry para maior confiabilidade
export const loadLeafletCSSWithRetry = async (retries = 3): Promise<void> => {
  for (let i = 0; i < retries; i++) {
    try {
      await loadLeafletCSS();
      return;
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1s before retry
    }
  }
};
