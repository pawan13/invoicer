import React from 'react';

export default function Notes({ notes }) {
  return (
    <div>
      <section className="mt-10 mb-5">
        <p>{notes}</p>
      </section>
    </div>
  );
}
