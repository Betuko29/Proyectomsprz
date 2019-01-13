import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typedef";
import SyncModel from "./lib/index";

const port = 4000;

// tslint:disable-next-line:no-shadowed-variable
async function startServer(port =  5000) {
	try {
		const models = await SyncModel.sequelize.sync();
		const server = new ApolloServer({ typeDefs, resolvers,
			context: () => ({
				db: models
			})
		});
		const { url } = await server.listen(port);
		console.log(`Servidor iniciado en la ruta: ${url}`);
	} catch(e) {
		throw new Error(e)
	}
}
startServer(port);
