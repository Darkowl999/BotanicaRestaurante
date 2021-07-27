const Area = require('./models/area');
const Cargo = require('./models/cargo');
const Cliente = require('./models/cliente');
const Empleado = require('./models/empleado');
const Mesa = require('./models/mesa');
const Pedido = require('./models/pedido');
const Plato = require('./models/plato');
const Pedido_Plato = require('./models/pedido_plato');
const Recibo = require('./models/recibo');
const Reserva = require('./models/reserva');
const Roles = require('./models/roles');
const Turno = require('./models/turno');
const Usuario = require('./models/usuario');

Roles.hasMany(Usuario);
Usuario.hasOne(Cliente);
Usuario.hasOne(Empleado);
Cargo.hasMany(Empleado);
Empleado.belongsToMany(Turno, { through: 'empleado_turno' });
Area.hasMany(Mesa);
Cliente.hasMany(Reserva);
<<<<<<< HEAD
Reserva.belongsToMany(Mesa, { through: 'reservar'});
Pedido.belongsToMany(Plato, { through: 'pedido_plato' });
Cliente.hasMany(Recibo);
Pedido.hasOne(Recibo);
Mesa.hasMany(Recibo);
=======
Reserva.belongsToMany(Mesa, { through: 'reservar' });
Cliente.hasMany(Recibo);
Pedido.hasOne(Recibo);
Mesa.hasMany(Recibo);
Pedido.belongsToMany(Plato, { through: Pedido_Plato });
>>>>>>> 31fab7f2b59a7c886745e62b5e2df0cb119db083
