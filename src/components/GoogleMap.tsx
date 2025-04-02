
import React from 'react';

const GoogleMap = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7903904013583!2d-38.32186362584345!3d-12.88638848909837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716160175410601%3A0x5ce3b81dbf784a9c!2sAv.%20Santos%20Dumont%2C%205017%20-%20Jardim%20do%20Jockey%2C%20Lauro%20de%20Freitas%20-%20BA%2C%2042700-000!5e0!3m2!1spt-BR!2sbr!4v1708803519276!5m2!1spt-BR!2sbr";
  
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-mint-light">
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Consultório"
      />
    </div>
  );
};

export default GoogleMap;
