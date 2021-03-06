import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import AlgorithmsList from "components/algorithmsList";
import LanguagesList from "components/languagesList";
import { getAlgorithm } from "lib/algorithms";
import Section from "components/section";
import CategoriesList from "components/categoriesList";
import { Language, Languages } from "lib/models";
import classes from "./index.module.css";

export default function Home({ topAlgorithms, featuredAlgorithms }) {
  return (
    <>
      <Section title="Top algorithms">
        <AlgorithmsList noCategories algorithms={topAlgorithms} />
      </Section>
      <div id="about">
        <Section>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.twoCols}>
                <div>
                  <Typography variant="h5" className={classes.title}>
                    What is an algorithm?
                  </Typography>
                  <Typography>
                    An algorithm is a set of rules that takes in one or more
                    inputs, then performs inner calculations and data
                    manipulations and returns an output or a set of outputs. In
                    short, algorithms make life easy. From complex data
                    manipulations and hashes, to simple arithmetic, algorithms
                    follow a set of steps to produce a useful result. One
                    example of an algorithm would be a simple function that
                    takes two input values, adds them together and returns their
                    sum.
                  </Typography>
                </div>
                <div />
                <div>
                  <Typography variant="h5" className={classes.title}>
                    About Us
                  </Typography>
                  <Typography>
                    We are a group of programmers helping each other to build
                    new things, whether it be writing complex encryption
                    programs, or simple ciphers. Our goal is to work together to
                    document and model beautiful, helpful and interesting
                    algorithms using code. We are an open-source community -
                    anyone can contribute. We check each other's work,
                    communicate and collaborate to solve problems. We strive to
                    be welcoming, respectful, yet make sure that our code
                    follows the latest programming guidelines.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>
      <Section title="Featured algorithms">
        <AlgorithmsList noCategories algorithms={featuredAlgorithms} />
      </Section>
      <Section title="Top categories">
        <CategoriesList
          categories={[
            {
              name: "Sorts",
              icon: "sort",
              href: "/category/sorts",
            },
            {
              name: "Searches",
              icon: "search",
              href: "/category/searches",
            },
            {
              name: "Dynamic Programming",
              icon: "bolt",
              href: "/category/dynamicprogramming",
            },
            {
              name: "Ciphers",
              icon: "enhanced_encryption",
              href: "/category/ciphers",
            },
            {
              name: "Data Structures",
              icon: "grid_view",
              href: "/category/datastructures",
            },
            {
              name: "Basic Math",
              icon: "calculate",
              href: "/category/maths",
            },
            {
              name: "Image Processing",
              icon: "insert_photo",
              href: "/category/digitalimageprocessing",
            },
          ]}
        />
      </Section>

      <div id="contribute">
        <Section>
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.twoCols}>
                <div>
                  <Typography variant="h5" className={classes.title}>
                    Programming Languages
                  </Typography>
                  <Typography>
                    We support many programming languages. Each language has its
                    own GitHub repository where all the code for the algorithms
                    is stored. Here is a list of the current programming
                    languages:
                  </Typography>
                  <LanguagesList
                    languages={Object.keys(Languages).map(
                      (langName: Language) => ({
                        name: langName,
                        href: `/language/${langName}`,
                      })
                    )}
                    className={classes.languages}
                    outlined
                  />
                </div>
                <div />
                <div>
                  <Typography variant="h5" className={classes.title}>
                    Contribute
                  </Typography>
                  <Typography>
                    We encourage you to contribute to these repositories. If you
                    have an algorithm that you want to add, a change you want to
                    make or a bug you want to fix, please do so. But before you
                    do, make sure you have read the contributing guidelines
                    found in CONTRIBUTING.md in the repository. Make sure that
                    you are respectful, helpful and using the latest version of
                    the language. After reading the contribution guidelines,
                    please fork the repository, work on your changes and then
                    submit them as a pull request.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const data = getAllAlgorithms();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      topAlgorithms: [
        getAlgorithm("binary-search"),
        getAlgorithm("quick-sort"),
        getAlgorithm("bogo-sort"),
      ],
      featuredAlgorithms: [
        getAlgorithm("coinchange"),
        getAlgorithm("caesar-cipher"),
        getAlgorithm("bellman-ford"),
      ],
    },
  };
}
