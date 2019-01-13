import coneccion from "../lib/index";
async function testConection() {
    try {
        const consultar = await coneccion.authenticate();
        console.log(consultar);
    } catch (e) {
        throw new Error(`${e}`);
    }

}
export default testConection;
