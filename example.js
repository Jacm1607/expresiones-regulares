const expresiones = {
  correo : /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/, // Solo correo
  numero : /^\d{3,6}$/, // Solo numeros de 3 a 6 caracter
  password : /^[a-zA-Z0-9*_.]{8}$/, // Password de 8 caracteres, acepta solo * _ .
  texto : /^[a-zA-Z0-9À-ÿ \,\.\-\ñ\Ñ\/]{2,6}/, // Solo texto de 2 a 6 caracteres
  decimales: /[0-9]+([.][0-9]+)?$/ 
}
