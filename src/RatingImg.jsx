import React from 'react'

export default function RatingImg({rating}) {
  let a, b;
  if (rating % 1 == 0) {
      a = -30
      b = -42 - (33 * (Math.floor(rating) - 1))
  }
  else {
      a = -166
      b = -42 - (33 * (Math.floor(rating)))
  }
  return (
    <div style={{ backgroundPositionX: `${a}px`, backgroundPositionY: `${b}px` }}
    className={`rating  bg-[url(https://th.bing.com/th/id/OIP.bPmsOgLJLETIqgiYnFzJaQHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)] `}>
</div>
  )
}
