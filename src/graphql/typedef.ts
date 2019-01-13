import { gql } from "apollo-server";
const typegql = gql`
scalar Date
type Empleado {
	uuid: ID!
	nombre: String!
	apellido: String!
	email: String!
	direccion: String!
	fech_nac: Date!
	estatus: Boolean!
	habilidades: String!
	habilidades_desc: String!
	createAt: Date!
	updateAt: Date!
	contrasena: ID!
}

type Huellas {
  	huella: String!
	uuid: ID!
	createAt: String!
	updateAt: String!
	EmpleadoUuid: String!
}

type Historial {
	uuid: ID!
	accion: String!
	fechAccion: Date!
}

type Query {
 hello: String!,
 soluc_candidato(preg: String!): [Empleado!]
 trabajadores: [Empleado!]!,
 login (email: String!, contrasena: Int!):[Empleado!]!,
 historial: [Historial!]!,
 
}

type Mutation {
  Formulario (
	nombre: String!,
	apellido: String!,
	email: String!,
	direccion: String!,
	fech_nac: String!,
	estatus: Boolean!,
	habilidades: String!,
	habilidades_desc: String!,
	contrasena: Int!,
	  ):
	Empleado!,

  Historial (
	uuid: ID!,
	accion: String!,
	fechAccion: Date!,	
	):
	Historial!,
	
}

`;
export default typegql;
