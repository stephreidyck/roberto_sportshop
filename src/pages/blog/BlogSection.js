import React from "react";

function BlogSection({ posts }) {
  return (
    <div>
      <section class=" mx-3 mt-10 rounded-xl bg-blue-300 opacity-90 dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Our Blog
            </h2>
            <p class="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <div class="grid gap-8 lg:grid-cols-2">
            {/* <article class="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <div class="mb-5 flex items-center justify-between text-gray-500">
                <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                  <svg
                    class="mr-1 h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Tutorial
                </span>
                <span class="text-sm">14 days ago</span>
              </div>
              <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">How to quickly deploy a static website</a>
              </h2>
              <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers influence both web
                designers and developers.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <img
                    class="h-7 w-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />
                  <span class="font-medium dark:text-white">Jese Leos</span>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Read more
                  <svg
                    class="ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </article> */}
            {posts.map((post, index) => {
              return (
                <article
                  key={index}
                  class="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
                >
                  <div class="mb-5 flex items-center justify-between text-gray-500">
                    <span class="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        class="mr-1 h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                      </svg>
                      Article
                    </span>
                    <span class="text-sm">{post.publishedAt}</span>
                  </div>
                  <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href={`/blog/${post.postSlug}`}>{post.postTitle}</a>
                  </h2>
                  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                    Static websites are now used to bootstrap lots of websites
                    and are becoming the basis for a variety of tools that even
                    influence both web designers and developers influence both
                    web designers and developers.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                      <img
                        class="h-7 w-7 rounded-full object-cover"
                        src={post.postAuthor.fields.authorPhoto.fields.file.url}
                        alt="Bonnie Green avatar"
                      />
                      <span class="font-medium dark:text-white">
                        {post.postAuthor.fields.authorName}
                      </span>
                    </div>
                    <a
                      href={`/blog/${post.postSlug}`}
                      class="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Read more
                      <svg
                        class="ml-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogSection;
