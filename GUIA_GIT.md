# Guía de Git y GitHub para VIPAX

## Configuración inicial (ya hecho)

```bash
git init
git add .
git commit -m "feat: mensaje descriptivo"
gh repo create vipax --public --source=. --push
```

---

## Flujo de trabajo diario

### 1. Ver qué ha cambiado
```bash
git status
git diff
```

### 2. Guardar cambios
```bash
git add .                          # Agregar todos los archivos
git add archivo.js                 # Agregar un archivo específico
git add src/                       # Agregar una carpeta
```

### 3. Crear commit
```bash
git commit -m "feat: agregar nueva sección"
git commit -m "fix: corregir botón de contacto"
git commit -m "style: actualizar colores"
```

### 4. Subir a GitHub
```bash
git push
```

---

## Convención de mensajes (Conventional Commits)

| Prefijo    | Uso                              | Ejemplo                          |
|------------|----------------------------------|----------------------------------|
| `feat:`    | Nueva funcionalidad              | `feat: agregar página de blog`   |
| `fix:`     | Corregir error                   | `fix: botón no funciona en mobile` |
| `style:`   | Cambios de diseño/estilos        | `style: cambiar color primario`  |
| `refactor:`| Reestructurar código sin cambiar funcionalidad | `refactor: separar componentes` |
| `docs:`    | Documentación                    | `docs: actualizar README`        |
| `chore:`   | Tareas de mantenimiento          | `chore: actualizar dependencias` |

---

## Comandos útiles

### Ver historial
```bash
git log --oneline              # Ver commits recientes
git log --oneline -10          # Ver últimos 10 commits
```

### Deshacer cambios
```bash
git checkout -- archivo.js     # Deshacer cambios en un archivo (antes de add)
git reset HEAD archivo.js      # Quitar archivo del staging
```

### Ramas (branches)
```bash
git branch                     # Ver ramas actuales
git checkout -b feature/nueva  # Crear rama nueva y cambiarse
git checkout main              # Volver a la rama principal
git merge feature/nueva        # Unir rama a main
git branch -d feature/nueva    # Eliminar rama
```

### Ver diferencias
```bash
git diff                       # Cambios sin stagear
git diff --staged              # Cambios stageados
git diff main..feature/nueva   # Diferencia entre ramas
```

---

## Ejemplo completo: agregar un cambio

```bash
# 1. Ver qué cambió
git status

# 2. Agregar archivos
git add .

# 3. Commit
git commit -m "feat: agregar sección de FAQ"

# 4. Subir
git push

# 5. Netlify despliega automáticamente
```

---

## Errores comunes

### "Olvidé agregar un archivo al commit"
```bash
git add archivo-olvidado.js
git commit --amend --no-edit    # Agrega al último commit
git push --force-with-lease     # Sube el cambio
```

### "Quiero deshacer el último commit"
```bash
git reset --soft HEAD~1         # Deshace el commit pero mantiene los cambios
```

### "Conflicto de merge"
```bash
# 1. Abrir el archivo y resolver el conflicto manualmente
# 2. Guardar el archivo
git add .
git commit -m "fix: resolver conflicto de merge"
```

---

## Enlaces útiles

- **Repositorio**: https://github.com/Jcastrohoyos/vipax
- **Netlify**: https://app.netlify.com
- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
