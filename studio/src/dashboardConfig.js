export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606aa93defe9f27a7f521061",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4jqbjotn",
                  apiId: "f89edd91-7008-479f-b502-04d6beba8941",
                },
                {
                  buildHookId: "606aa93d4d92546808ad40c0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4zovqhbo",
                  apiId: "b09ca79b-0b1f-4de6-a221-0a70c0cf2038",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jackrhumphrey/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4zovqhbo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
