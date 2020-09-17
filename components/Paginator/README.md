# Paginator

Standard select menu component.

## Usage

Strings
```
<Paginator
  current={1}
  total={100}
  pageSize={25}
  onPageChanged={action('pageClicked')}
/>
```

## Paginator props
#### `current: number`
Current page user is on.

#### `total: number`
Total number of items in list.

#### `pageSize: number`
Size of each page in list.

#### `onPageChange: function ()`
Function that fires when previous or next button is clicked.