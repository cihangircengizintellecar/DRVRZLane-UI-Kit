# Table Elements

All elements associated with a `Table` component.

The `Table` is a `function-as-child` style component. It will calculate the max-width to pass to each
column. Note in the usage below.

## Usage
```
<Table headings={['First Name', 'Last Name']}>
  {(maxWidth) => {
    return users.map((user, i) => (
      <Row>
        <Column style={{ maxWidth }}>{user.firstName}</Column>
        <Column style={{ maxWidth }}>{user.lastName}</Column>
      </Row>
    ))
  }}
</Table>
```

## Table props
#### `headings: arrayOf(string)`
Array of the labels for each column's table header

#### `children: function (maxWidth)`
Pass a function as children. This function has an argument of maxWidth, which is passed to
child `Column` components as a style prop.

## Row props
*None*

## Column props
#### `style: object`
Standard React `style` prop.