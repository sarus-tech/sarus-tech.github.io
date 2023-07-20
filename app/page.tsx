import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GitHub, Twitter } from './buttons'
import { SQL, Rust, Python, Shell } from './code'
import { Step1, Step2, Step2NoSD, Step2SD, Step3, Step3NoAlt, Step3Alt } from './dot'

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
      {/* Intro */}
      <div className="w-full flex flex-col items-center py-10 z-10">
        <div className="w-full max-w-7xl text-center py-10">
          <h1 className="font-serif text-6xl my-3">Sarus computation graphs examples</h1>
          <p className="font-sans text-4xl my-3">with DP variants computations</p>
        </div>
        <div className="w-80 flex justify-between py-10 content-center">
          <div className="text-lighter-red hover:text-light-red text-xl"><a href="https://sarus.tech">http://sarue.tech</a></div>
          <Twitter />
        </div>
        <div className="w-full max-w-7xl p-3">
          <p className="text-xl my-3">Sarus is about a data-owner opening a dataset to a
          data-practitioner to interact with in a private way.</p>
          <p className="text-xl my-3">With Sarus, the code the data-practitioner would like to run on
          the data is parsed into a computation graph and sent-over to Sarus instance next to the data.
          The computation graph is compiled before it is evaluated
          to provide privacy protection: usually some level of Differential Privacy.</p>
        </div>
      </div>
      {/* <div className="w-full flex flex-col items-center bg-main-green text-lighter-green py-10"> */}
      <div className="w-full flex flex-col items-center py-10 z-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl" id="get-started">A very simple program</h2>
          <p className="text-xl my-3">The user logs into Sarus remote server.</p>
          <p className="text-xl my-3">Selects a dataset.</p>
          <p className="text-xl my-3">Extract some subset of this dataset, using SQL.</p>
          <p className="text-xl my-3">Then evaluates two values by printing them.</p>
          <Python>{`from sarus import Client

# Connect to Sarus
client = Client(
    url='https://try.sarus.tech/gateway',
    email='analyst@example.com')

# Select a dataset
remote_dataset = client.dataset(slugname='retail_data_public_products')

# Extract some data
query = """SELECT * FROM private.transactions_demo WHERE "week" IN (2,3,4)"""
df = remote_dataset.sql(query).as_pandas()
head = df.head()
print(head)

# Compute a mean
mean = df.sales_value.mean()
print(mean)
`}
            </Python>
        </div>
      </div>
      {/* First graph */}
      <div className="w-full flex flex-col items-center py-10 z-10">
        <div className="w-full max-w-7xl p-3">
          <h2 className="font-serif text-4xl" id="get-started">Dataset selection</h2>
          <p className="text-xl my-3">The selected dataset comes already transformed by the data-owner for preparation.</p>
        </div>
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
      <div className="w-full flex flex-col items-center py-10 z-10">
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="basis-2/5 p-3">
            <Python>{`# Extract some data
query = """
SELECT
    *
FROM
    private.transactions_demo
WHERE
    "week" IN (2,3,4)
"""
df = remote_dataset.sql(query).as_pandas()
head = df.head()
print(head)`}
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
      {/* Third graph */}
      <div className="w-full flex flex-col items-center py-10 z-10">
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Step2NoSD />
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Step2SD />
          </div>
        </div>
      </div>
      {/* 4th graph */}
      <div className="w-full flex flex-col items-center py-10 z-10">
        <div className="w-full max-w-7xl flex flex-row items-center">
        <div className="basis-2/5 p-3">
            <Python>{`# Compute a mean
mean = df.sales_value.mean()
print(mean)`}
            </Python>
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Step3 />
          </div>
        </div>
      </div>
      {/* 4th graph */}
      <div className="w-full flex flex-col items-center py-10 z-10">
        <div className="w-full max-w-7xl flex flex-row items-center">
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Step3NoAlt />
          </div>
          <div className="flex flex-col basis-1/5 p-3 items-center">
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </div>
          <div className="flex flex-col basis-2/5 p-3 items-center">
            <Step3Alt />
          </div>
        </div>
      </div>
    </main>
  )
}
