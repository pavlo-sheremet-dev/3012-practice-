const tree = {
  value: 10,
  children: [
    {
      value: 20,
      children: [
        { value: 5, children: [] },
        {
          value: 15,
          children: [
            {
              value: 10,
              children: [
                { value: 40, children: [] },
                { value: 100, children: [] },
              ],
            },
            {
              value: 2,
              children: [
                { value: 5, children: [] },
                {
                  value: 25,
                  children: [
                    { value: 50, children: [] },
                    { value: 50, children: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: 30,
      children: [
        { value: 25, children: [] },
        { value: 10, children: [] },
      ],
    },
  ],
};

export const sumTreeValues = (tree) => {};
