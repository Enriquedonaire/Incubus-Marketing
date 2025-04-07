import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export function Contacto() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Variables de entorno desde .env
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        publicKey
      );
      console.log('Correo enviado:', result.text);
      setSuccess(true);
      reset(); // Limpia el formulario
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el mensaje. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contacto</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Ponte en contacto</h2>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-blue-500`}
                {...register('name', { required: 'El nombre es obligatorio' })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-blue-500`}
                {...register('email', {
                  required: 'El email es obligatorio',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Email inválido',
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                rows={4}
                className={`w-full px-4 py-2 rounded-lg bg-gray-800 border ${errors.message ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-blue-500`}
                {...register('message', { required: 'El mensaje es obligatorio' })}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            {success && (
              <p className="text-green-500 text-center">¡Mensaje enviado con éxito!</p>
            )}
          </form>
        </div>

        <div className="flex flex-col p-10 justify-center">
          <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4 text-blue-500" />
              <span>contacto@incubus.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4 text-blue-500" />
              <span>+34557891432</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4 text-blue-500" />
              <span>Carrer de Casp 16, Barcelona, España</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}