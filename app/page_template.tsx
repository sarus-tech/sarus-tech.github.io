import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitHub, Twitter } from './buttons'
import { SQL, Rust, Python, Shell } from './code'
import { Step1, Step2, Rewrite, Protect, Private } from './dot'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-dark-green text-lighter-green font-body">
      <div className="flex w-full justify-between">
        <div className="flex justify-center">
          <Image
            src="/logo_alt.svg"
            alt="Sarus Logo"
            width={60}
            height={60}
            priority
            className="pt-2"
          />
          <div className="font-display font-bold text-lg py-5">
            <a href="http://sarus.tech/">Sarus</a>
          </div>
        </div>
      </div>
      {/* First graph */}
      <div className="w-full flex flex-col items-center text-light-green py-10 z-10">
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="basis-2/5 p-3">
            <Python>{`from sarus import Client

# Connect to Sarus
client = Client(
    url='https://try.sarus.tech/gateway',
    email='analyst@example.com')

# Select a dataset
remote_dataset = client.dataset(
    slugname='retail_data_public_products')`}
            </Python>
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Step1 />
          </div>
        </div>
      </div>
      {/* Second graph */}
      <div className="w-full flex flex-col items-center text-light-green py-10 z-10">
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="basis-2/5 p-3">
            <Python>{`from sarus import Client

# Connect to Sarus
client = Client(
    url='https://try.sarus.tech/gateway',
    email='analyst@example.com')

# Select a dataset
remote_dataset = client.dataset(
    slugname='retail_data_public_products')`}
            </Python>
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Step2 />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center text-light-green py-10 z-10">
        
      </div>
      <div className="w-full flex flex-col items-center text-light-green py-10 z-10">
        
      </div>
      <div className="w-full flex flex-col items-center text-lighter-green py-10 z-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl my-3">What is Qrlew?</h2>
          <p className="text-xl my-3">Qrlew is an <a href="https://github.com/Qrlew" className="text-lighter-red hover:text-light-red">open source library</a> that
            aims to parse and compile SQL queries into an <a href="https://en.wikipedia.org/wiki/Intermediate_representation" className="text-lighter-red hover:text-light-red">Intermediate Representation (IR)</a> that
            is well-suited for various rewriting tasks.
            Although it was originally designed for privacy-focused applications, it can be utilized for a wide range of purposes.</p>
        </div>
        <div className="w-full max-w-7xl flex items-center flex-row">
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">SQL Query IR</h3>
            <p className="text-xl my-3">Qrlew transforms a SQL query into a combination of simple operations such as <code>Map</code>, <code>Reduce</code> and <code>Join</code> that are applied to  <code>Tables</code>.
              This representation simplifies the process of rewriting queries and reduces dependencies on the diverse range of syntactic constructs present in SQL.</p>
          </div>
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">Type Inference Engine</h3>
            <p className="text-xl my-3">Differential Privacy (DP) guaranrtees are hard to obtain without destroying too much information.
              In <a href="https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf" className="text-lighter-red hover:text-light-red">many mechanisms</a> having prior bounds on values can
              improve the utility of DP results dramatically. By propagating types cleverly, Qrlew can returns bounds for all values.</p>
          </div>
          <div className="basis-1/3 p-3">
            <h3 className="text-3xl my-3">Differential Privacy compiler</h3>
            <p className="text-xl my-3">Qrlew can compile SQL queries into Differentially Private ones.
              The process is inspired by <a href="https://petsymposium.org/popets/2020/popets-2020-0025.pdf" className="text-lighter-red hover:text-light-red">Wilson et al. 2020</a>.
              The complexity of the compilation process makes Qrlew IR very useful at delivering clean, readable and reliable code.</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-main-green text-lighter-green py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl" id="get-started">Get Started</h2>
          <p className="text-xl my-3">Qrlew is a <a href="https://crates.io/crates/qrlew" className="text-lighter-red hover:text-light-red">Rust library</a>. To add it to your project, simply type:</p>
          <Shell>
            {`# Create a new project
cargo new super-sql-app
# Change directory
cd super-sql-app
# Add qrlew library
cargo add qrlew`}</Shell>
          <p className="text-xl my-3">Qrlew comes as a <a href="https://pypi.org/project/pyqrlew/" className="text-lighter-red hover:text-light-red">python library</a>. For now it has limited features.
            To install it simply type:</p>
          <Shell>
            {`pip install pyqrlew`}</Shell>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-main-red text-lighter-red py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl">Parse SQL queries into Qrlew intermediate representation</h2>
          <p className="font-sans text-lg">Qrlew transforms a SQL query into a combination of simple operations such as Map, Reduce and Join that are applied to Tables.
            This representation simplifies the process of rewriting queries and reduces dependencies on the diverse range of syntactic constructs present in SQL.</p>
        </div>
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="basis-2/5 p-3">
            <SQL>{`SELECT * FROM order_table JOIN item_table
ON id=order_id;`}</SQL>
            <Rust>
              {`use qrlew::{sql::parse, Relation};

let relation = Relation::try_from(
  parse("SELECT * FROM order_table JOIN
    item_table ON id=order_id;")
    .unwrap()
    .with(&relations),
).unwrap();`}</Rust>
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Rewrite />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-light-red text-lightest-red py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl">Output SQL</h2>
          <p className="font-sans text-lg">After the rewritting process has happened in the intermediate representation, Qrlew can outputs plain SQL.</p>
        </div>
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="basis-2/5 p-3">
            <Rust>
              {`use sqlparser::ast::Query;

let query = Query::from(&relation);`}</Rust>
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="basis-2/5 p-3">
            <SQL>{
              `WITH
  join__e_y (field_eygr, field_0wjz, field_cg0j,
    field_idxm, field_0eqn, field_3ned, field_gwco)
  AS (SELECT * FROM order_table JOIN item_table
    ON (order_table.id) = (item_table.order_id)),
  map_8r2s (field_eygr, field_0wjz, field_cg0j,
    field_idxm, field_0eqn, field_3ned, field_gwco)
  AS (SELECT field_eygr AS field_eygr, field_0wjz AS
    field_0wjz, field_cg0j AS field_cg0j, field_idxm
    AS field_idxm, field_0eqn AS field_0eqn,
    field_3ned AS field_3ned, field_gwco AS field_gwco
    FROM join__e_y)
SELECT * FROM map_8r2s;`}</SQL>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-lighter-red text-dark-red py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl">Track the protected entity accross SQL queries</h2>
          <p className="text-xl my-3">Differential Privacy (DP) is defined with respect to a <em>distance</em> between datasets.
            A DP mechanisms is such that computations on neighboring datasets yield indistinguishable
            results. <em>Neighboring</em> datasets are datasets at distance 1.
            In Qrlew, the distance is defined in terms of number if differing <em>protected entities</em> (PE).
            The PE is defined as an identifying string <code>_PROTECTED_ENTITY_ID_</code> added to each table.
          </p>
        </div>
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full p-3">
            <SQL>{`SELECT * FROM order_table JOIN item_table
ON id=order_id;`}</SQL>
            <Rust>
              {`use qrlew::{sql::parse, Relation};

let relation = Relation::try_from(
  parse("SELECT * FROM order_table JOIN
    item_table ON id=order_id;")
    .unwrap()
    .with(&relations),
).unwrap();
// Define the protected entity: here the name of the user
let relation = relation.force_protect_from_field_paths(
  &relations,
  &[
      (
        "item_table",
        &[
          ("order_id", "order_table", "id"),
          ("user_id", "user_table", "id"),
        ],
        "name",
      ),
      ("order_table", &[("user_id", "user_table", "id")], "name"),
      ("user_table", &[], "name"),
  ],
);`}</Rust>
          </div>
          <div className="p-3">
            <FontAwesomeIcon icon={faArrowDown} size="xl" />
          </div>
          <div className="w-full p-3">
            <Protect />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-light-green text-lighter-green py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl">Compile SQL queries into Differentially Private ones</h2>
          <p className="text-xl my-3">The process is inspired by <a href="https://petsymposium.org/popets/2020/popets-2020-0025.pdf" className="text-lighter-red hover:text-light-red">Wilson et al. 2020</a>.
            The complexity of the compilation process makes Qrlew IR very useful at delivering clean, readable and reliable code.</p>
        </div>
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="w-full p-3">
            <SQL>{`SELECT * FROM order_table JOIN item_table
ON id=order_id;`}</SQL>
            <Rust>
              {`use qrlew::{sql::parse, Relation};

let relation = Relation::try_from(
  parse("SELECT * FROM order_table JOIN
    item_table ON id=order_id;")
    .unwrap()
    .with(&relations),
).unwrap();
// Add noise to get 𝜀,𝛿-DP
let relation = relation.dp_compilation(
  &relations,
  &[
    (
      "item_table",
      &[
        ("order_id", "order_table", "id"),
        ("user_id", "user_table", "id"),
      ],
      "name",
    ),
    ("order_table", &[("user_id", "user_table", "id")], "name"),
    ("user_table", &[], "name"),
  ],
  1., // epsilon
  1e-5 // delta
);`}</Rust>
          </div>
          <div className="p-3">
            <FontAwesomeIcon icon={faArrowDown} size="xl" />
          </div>
          <div className="w-full p-3">
            <Private />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-lighter-green text-main-green py-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl my-3">Why Qrlew?</h2>
          <p className="text-xl my-3">Sarus Technologies builds a state-of-the art product to access private data without seeing it.
            Giving the possibility to run SQL queries safely is an important part of Sarus.
            Qrlew is at the core of the next iteration of Sarus SQL engine. It is not yet in production but should be gradually integrated in Sarus and fully integrated by the end of the year.
            Besides the DP algorithm need to be trusted, hence the open source release.</p>
        </div>
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl my-3">Where is it Going?</h2>
          <p className="text-xl my-3">Qrlew is actively developped as the core of Sarus SQL offer, but it aims at being used elsewhere.
            Many connectors to other tools in Differential Privacy should be developped in the coming months.</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-dark text-lighter-green py-10 z-10">
        <div className="w-full max-w-7xl text-sm py-1 text-[#999999]">Qrlew project is licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
          you may not use it except in compliance with the License.
          You may obtain a copy of the License at
        </div>
        <div className="w-full max-w-7xl text-sm py-1 text-[#999999]">
          <a href="http://www.apache.org/licenses/LICENSE-2.0">http://www.apache.org/licenses/LICENSE-2.0</a>
        </div>
        <div className="w-full max-w-7xl text-sm py-1 text-[#999999]">Unless required by applicable law or agreed to in writing, software
          distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          See the License for the specific language governing permissions and
          limitations under the License.
        </div>
      </div>
      <div className="w-full flex justify-center bg-dark">
        <div className="font-display text-lg py-5">
          Copyright 2023
        </div>
        <Image
          src="/logo_alt.svg"
          alt="Sarus Logo"
          width={60}
          height={60}
          priority
          className="pt-2"
        />
        <div className="font-display text-lg py-5">
          <a href="http://sarus.tech/" className="font-bold">Sarus</a> Technologies
        </div>
      </div>
    </main>
  )
}
