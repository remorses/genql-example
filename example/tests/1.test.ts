import { createClient } from '../generated'

const client = createClient()

test('first query', async () => {
    const res = await client.query({
        __name: 'SomeQuey',
        continents: {
            code: 1,
            name: 1,
        },
    })
    res.continents[0].code
    expect(res.continents).toMatchInlineSnapshot(`
    Array [
      Object {
        "code": "AF",
        "name": "Africa",
      },
      Object {
        "code": "AN",
        "name": "Antarctica",
      },
      Object {
        "code": "AS",
        "name": "Asia",
      },
      Object {
        "code": "EU",
        "name": "Europe",
      },
      Object {
        "code": "NA",
        "name": "North America",
      },
      Object {
        "code": "OC",
        "name": "Oceania",
      },
      Object {
        "code": "SA",
        "name": "South America",
      },
    ]
  `)
    const name = await client.chain.query
        .country({ code: 'NA' })
        .continent.name.get()
    console.log(name)
})
