import { useCallback, useEffect, useState } from 'react'
import { obtenerUsuarioActual, obtenerRol } from '../services/auth.js'

const Detokenizador = ({ setVisible_del_padre }) => {
  const [datos, setDatos] = useState('')

  const consumirToken = useCallback(async () => {
    if (!localStorage.getItem('token')) {
      setDatos('No hay token guardado en Local Storage.')
      setVisible_del_padre('')
      return
    }

    try {
      // Consume el token desde Local Storage al enviarlo al endpoint protegido /me.
      const usuario = await obtenerUsuarioActual()
      setDatos(JSON.stringify(usuario, null, 2))
      setVisible_del_padre(obtenerRol(usuario))
    } catch {
      setDatos('La sesión guardada no es válida.')
      setVisible_del_padre('')
    }
  }, [setVisible_del_padre])

  useEffect(() => {
    const initialLoad = window.setTimeout(() => {
      void consumirToken()
    }, 0)
    window.addEventListener('storage', consumirToken)
    return () => {
      window.clearTimeout(initialLoad)
      window.removeEventListener('storage', consumirToken)
    }
  }, [consumirToken])

  return (
    <section>
      <h2>Usuario autenticado</h2>
      <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
        {datos}
      </pre>
    </section>
  )
}

export default Detokenizador
