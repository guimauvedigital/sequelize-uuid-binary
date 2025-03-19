import {Model, ModelAttributeColumnOptions} from "sequelize";
import {parse, stringify, v4} from "uuid"
import {Nullable} from "better-nullable";

const uuidDatatype = <M extends Model>(options: Omit<ModelAttributeColumnOptions<M>, "type"> = {}): ModelAttributeColumnOptions<M> => ({
    ...options,
    type: "BINARY(16)",
    defaultValue: () => Buffer.from(parse(v4())),
    get() {
        const value: Nullable<Uint8Array> = this.getDataValue('id');
        return value ? stringify(value) : null;
    },
    set(value) {
        if (typeof value !== 'string') return
        this.setDataValue('id', Buffer.from(parse(value)));
    },
})

export default uuidDatatype
