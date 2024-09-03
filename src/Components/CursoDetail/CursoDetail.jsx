import React from 'react';
import styles from './CursoDetail.module.css'; // Importamos el módulo CSS

const CursoDetail = ({ curso, onSelectModulo }) => {
  if (!curso) return <div>Selecciona un curso para ver los detalles.</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{curso.nombre}</h2>
      <p className={styles.description}>{curso.descripcion}</p>
      <h3>Módulos</h3>
      <ul className={styles.moduleList}>
        {curso.modulos.map(modulo => (
          <li key={modulo.id} className={styles.moduleItem}>
            <button 
              className={styles.moduleButton} 
              onClick={() => onSelectModulo(modulo.id)}
            >
              {modulo.titulo}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursoDetail;
