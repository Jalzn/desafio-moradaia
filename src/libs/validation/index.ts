import { SchemaNode, SchemaObject } from "./validation"

const object = (v: object) => new SchemaObject(v)
const schema = () => new SchemaNode()

export default { object, schema }
