To reproduce:

```
npm install
node index.js
```

Then go to http://localhost:4000/ and run the following query:

```
{
  film {
    director
  }
}
```

The error given *should* have a `FORBIDDEN` code, but instead has `INTERNAL_SERVER_ERROR`.

You can see the expected behaviour by running `node no-transform.js` and running the same query.

