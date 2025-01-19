```javascript
// pages/api/hello.js
export default function handler(req, res) {
  //This line solves the issue when using Next.js 15
  res.json({ name: 'John Doe' });
} 
```