# Build My Resume via Graphql

`yarn add @nexus/schema apollo-server-micro date-fns graphql graphql-scalars micro`

`yarn add @apollo/client react-syntax-highlighter`

> src/Query.ts
```javascript
export const Query = queryType({
  definition(t) {
    t.string("name", {resolve: () => "Yee"})
  }
});
```
In graphql playground
```graphql
query Yee {
  name
}
```

return data:

```json
{
  "data": {
    "name": "Yee"
  }
}
```

# process.cwd() - Current Working Directory

[docs](https://www.youtube.com/watch?v=_HOp7hBEjp8)

```graphql
{
  bio {
    name
    email
    tagline
    website
    github
    linkedin
    objective
  }
  position(id: "10") {
    title
  }
  positions {
    id
    title
    company
    location
    years
    months
    startDate
    endDate
    achievements
  }
}
```