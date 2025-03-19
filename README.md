# sequelize-uuid-binary

A simple `BINARY(16)` UUID data type for Sequelize.

```ts
{
    id: uuidDatatype(),
    // ... other fields
}
```

You can also add any custom options to the `uuidDatatype` function, the same way you would with `Sequelize.UUID`:

```ts
{
    id: uuidDatatype({
        primaryKey: true,
        allowNull: false,
    }),
    // ... other fields
}
```
