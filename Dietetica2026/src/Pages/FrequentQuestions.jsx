import './FrequentQuestions.css'
import { Link } from 'react-router-dom'

function FrequentQuestions() {
  function enviarConsulta(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')
    const subject = encodeURIComponent('Consulta desde Dietética BeGreen')
    const body = encodeURIComponent(
      `Nombre y apellido: ${nombre}\nTeléfono: ${telefono}`,
    )

    window.location.href =
      `mailto:nik6.web@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="faq-page">
      <div className="faq-list">
        <h1 className="faq-list__title">Preguntas frecuentes</h1>
        <details>
          <summary>¿Cómo creo una cuenta o inicio sesión?</summary>
          <p>
            Podés crear una cuenta desde <Link to="/CreateAccount">Crear cuenta</Link>
            {' '}y luego ingresar desde <Link to="/LogIn">Iniciar sesión</Link>.
          </p>
        </details>
        <details>
          <summary>¿Cómo realizo una compra?</summary>
          <p>
            Iniciá sesión con una cuenta de cliente, entrá a la tienda, agregá
            productos al carrito y confirmá la compra desde el ticket.
          </p>
        </details>
        <details>
          <summary>¿Por qué no veo la tienda o el carrito?</summary>
          <p>
            La tienda, el carrito y el ticket requieren una sesión activa con
            rol Cliente. Si no tenés una sesión, iniciá sesión o creá una cuenta.
          </p>
        </details>
        <details>
          <summary>¿Dónde puedo conocer más sobre BeGreen?</summary>
          <p>
            Visitá la página <Link to="/AboutUs">Nosotros</Link> para conocer
            nuestra historia y misión.
          </p>
        </details>
      </div>

      <div className="faq-contact">
        <form className="faq-contact-form" onSubmit={enviarConsulta}>
          <h2 className="faq-contact-form__title">¿Tenés otra consulta?</h2>
          <div className="mb-3">
            <label htmlFor="contact-name" className="form-label">
              Nombre y apellido
            </label>
            <input
              id="contact-name"
              name="nombre"
              className="form-control"
              type="text"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact-phone" className="form-label">
              Teléfono
            </label>
            <input
              id="contact-phone"
              name="telefono"
              className="form-control"
              type="tel"
              autoComplete="tel"
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default FrequentQuestions
