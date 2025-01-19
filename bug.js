```javascript
// pages/api/hello.js
export default function handler(req, res) {
  //This line causes the error when using Next.js 15
  res.status(200).json({ name: 'John Doe' });
}