## Usges

```js
import useEffectState from 'use-effect-state'

const Comp = () => {
  const items = useEffectState(async () => {
    try {
      const apiUrl = 'https://api.example.com/data'
      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        return data
      }
      
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }, [])
}

```
