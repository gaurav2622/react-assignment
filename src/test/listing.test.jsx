import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ListingComponent from "../components/listingComponent/listing";
import * as list from "../services/getList";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../services/getList");

const commonData = {
  data: [
    {
      "state-province": "Abu Dhabi",
      domains: ["mbzuai.ac.ae"],
      web_pages: ["https://mbzuai.ac.ae/"],
      name: "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
      alpha_two_code: "AE",
      country: "United Arab Emirates",
    },
    {
      domains: ["acd.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.acd.ac.ae/"],
      name: "American College Of Dubai",
    },
    {
      domains: ["adu.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.adu.ac.ae/"],
      name: "Abu Dhabi University",
    },
    {
      domains: ["agu.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.agu.ae/"],
      name: "Al Ghurair University",
    },
    {
      domains: ["ajman.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.ajman.ac.ae/"],
      name: "Ajman University of Science & Technology",
    },
    {
      domains: ["alainuniversity.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.alainuniversity.ac.ae/"],
      name: "Alain University of Science and Technology",
    },
    {
      domains: ["alhosnu.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.alhosnu.ae/"],
      name: "Alhosn University",
    },
    {
      domains: ["aud.edu"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.aud.edu/"],
      name: "American University in Dubai",
    },
    {
      domains: ["aue.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.aue.ae/"],
      name: "American University in the Emirates",
    },
    {
      domains: ["aus.edu"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.aus.edu/"],
      name: "American University of Sharjah",
    },
    {
      domains: ["buid.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.buid.ac.ae/"],
      name: "British University in Dubai",
    },
    {
      domains: ["dmcg.edu"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.dmcg.edu/"],
      name: "Dubai Medical College for Girls",
    },
    {
      domains: ["dpc.edu"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.dpc.edu/"],
      name: "Dubai Pharmacy College",
    },
    {
      domains: ["dubai.rit.edu"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://dubai.rit.edu/"],
      name: "Rochester Institute of Technology, Dubai",
    },
    {
      domains: ["ece.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.ece.ac.ae/"],
      name: "Etisalat University College",
    },
    {
      domains: ["emiratesacademy.edu"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.emiratesacademy.edu/"],
      name: "The Emirates Academy of Hotel Managment",
    },
    {
      domains: ["gmu.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.gmu.ac.ae/"],
      name: "Gulf Medical University",
    },
    {
      domains: ["hbmeu.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.hbmeu.ac.ae/"],
      name: "Hamdan Bin Mohammed e-University",
    },
    {
      domains: ["hct.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.hct.ac.ae/"],
      name: "Higher Colleges of Technology",
    },
    {
      domains: ["ittihad.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.ittihad.ac.ae/"],
      name: "Ittihad University",
    },
    {
      domains: ["ju.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.ju.ac.ae/"],
      name: "Jumeira University",
    },
    {
      domains: ["khawarizmi.com"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.khawarizmi.com/"],
      name: "Al Khawarizmi International College",
    },
    {
      domains: ["ku.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.ku.ac.ae/"],
      name: "Khalifa University of Science, Technology and Research",
    },
    {
      domains: ["kustar.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.kustar.ac.ae/"],
      name: "Khalifa University",
    },
    {
      domains: ["masdar.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.masdar.ac.ae/"],
      name: "Masdar University Of Science And Technology",
    },
    {
      domains: ["nyuad.nyu.edu"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://nyuad.nyu.edu/"],
      name: "New York University, Abu Dhabi",
    },
    {
      domains: ["pi.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.pi.ac.ae/"],
      name: "The Petroleum Institute",
    },
    {
      domains: ["rakmhsu.com"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.rakmhsu.com/"],
      name: "Rak Medical & Health Sciences University",
    },
    {
      domains: ["sharjah.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.sharjah.ac.ae/"],
      name: "University of Sharjah",
    },
    {
      domains: ["skylineuniversity.com"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.skylineuniversity.com/"],
      name: "Skyline University College, Sharjah",
    },
    {
      domains: ["sorbonne.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.sorbonne.ae/"],
      name: "Paris-Sorbonne University Abu Dhabi",
    },
    {
      domains: ["uaeu.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.uaeu.ac.ae/"],
      name: "United Arab Emirates University",
    },
    {
      domains: ["ud.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.ud.ac.ae/"],
      name: "University Of Dubai",
    },
    {
      domains: ["uojazeera.com"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.uojazeera.com/"],
      name: "University of Jazeera",
    },
    {
      domains: ["uowdubai.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.uowdubai.ac.ae/"],
      name: "University of Wollongong - Dubai Campus",
    },
    {
      domains: ["zu.ac.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["http://www.zu.ac.ae/"],
      name: "Zayed University",
    },
    {
      domains: ["sia.ae"],
      country: "United Arab Emirates",
      "state-province": null,
      alpha_two_code: "AE",
      web_pages: ["https://www.sia.ae/"],
      name: "Scholars International Academy",
    },
  ],
  status: 200,
  statusText: "OK",
  headers: {
    "content-length": "7272",
    "content-type": "application/json",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter: ["xhr", "http"],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    method: "get",
    url: "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates",
  },
  request: {},
};

describe("Listing Component", () => {
  it("render detail", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByTestId } = render(<ListingComponent />);
    const wrapper = getByTestId("wrapper");
    await act(() => {
      Promise.resolve();
    });

    expect(wrapper).toBeTruthy();
  });
  it("render detail", () => {
    jest.spyOn(list, "getUniversityList").mockRejectedValueOnce(new Error());
    const { getByTestId } = render(<ListingComponent />);
    const wrapper = getByTestId("wrapper");
    expect(wrapper).toBeTruthy();
  });
  it("fires onChange event for search input", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByPlaceholderText } = render(<ListingComponent />);
    const searchInput = getByPlaceholderText("Search Here....");
    await act(() => {
      fireEvent.change(searchInput, { target: { value: "example" } });
    });
    expect(searchInput.value).toBe("example");
  });
  it("fires onChange event for search input", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByPlaceholderText } = render(<ListingComponent />);
    const searchInput = getByPlaceholderText("Search Here....");
    await act(() => {
      fireEvent.change(searchInput, { target: { value: "" } });
    });
    expect(searchInput.value).toBe("");
  });
  it("fires onChange event for filter select", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByTestId } = render(<ListingComponent />);
    const filterSelect = getByTestId("select-wrapper");
    await act(async () => {
      fireEvent.change(filterSelect, { target: { value: "Country" } });
    });
    expect(filterSelect.value).toBe("Country");
  });
  it("fires onChange event for filter select", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByTestId } = render(<ListingComponent />);
    const SortSelect = getByTestId("filter-wrapper");
    await act(async () => {
      fireEvent.change(SortSelect, { target: { value: "A To Z" } });
    });
  });
  it("fires onChange event for filter select", async () => {
    jest.spyOn(list, "getUniversityList").mockResolvedValue(commonData);
    const { getByTestId } = render(<ListingComponent />);
    const SortSelect = getByTestId("filter-wrapper");
    await act(async () => {
      fireEvent.change(SortSelect, { target: { value: "Z To A" } });
    });
  });
});
