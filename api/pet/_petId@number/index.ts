/* eslint-disable */
import type * as Types from "../../@types";
import { mockMethods } from "aspida-mock";

export type Methods = {
  /** Returns a single pet */
  get: {
    status: 200;
    /** successful operation */
    resBody: Types.Pet;
  };

  post: {
    reqFormat: URLSearchParams;

    reqBody: {
      /** Updated name of the pet */
      name: string;
      /** Updated status of the pet */
      status: string;
    };
  };

  delete: {
    reqHeaders?: {
      api_key?: string;
    };
  };
};

export default mockMethods<Methods>({
  get: ({ query, reqHeaders, reqBody }) => ({
    status: 200,
    resBody: {
      id: 12345,
      category: {
        id: 123,
        name: "category",
      },
      name: "taro",
      photoUrls: ["http://example.com"],
      tags: [
        {
          id: 123,
          name: "tag",
        },
      ],
      status: "available",
    },
  }),
});
