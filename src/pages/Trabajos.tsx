import React from 'react';

export function Trabajos() {
  const projects = [
    {
      title: "Rediseño E-commerce",
      client: "Fashion Store",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80",
      category: "Diseño Web"
    },
    {
      title: "Campaña Redes Sociales",
      client: "Organic Foods",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
      category: "Community Manager"
    },
    {
      title: "Identidad Corporativa",
      client: "Tech Startup",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800&q=80",
      category: "Diseño Gráfico"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Nuestros Trabajos</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-2">{project.client}</p>
              <span className="text-sm bg-blue-500 px-3 py-1 rounded-full inline-block w-fit">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}