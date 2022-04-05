import useSWR from "swr";
import dynamic from 'next/dynamic';
import Image from 'next/image'
import {currencyFormatter} from "../../lib/helper";
import ApexCharts from "apexcharts";
import ExploreAssets from "./exploreAssets";

const ReactApexCharts = dynamic(() => import('react-apexcharts'), {ssr: false});

type Currency = {
  _id: string
  name: string
  price: number
  icon: string
  changePercentage: number
  shortForm: string
  history: Array<number>
}

const CryptocurrencyList = () => {
  const {data} = useSWR<Currency[]>('/cryptocurrencies')
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {show: false},
      zoom: {enabled: false},
      type: 'line',
      sparkline: {enabled: true}
    },
    stroke: {
      curve: 'smooth',
      dashArray: [0, 5],
      width: [2]
    },
    colors: ['#29c76f'],
    tooltip: {
      enabled: false
    }
  }

  const negativeChartOptions = {
    ...chartOptions,
    colors: ['#FF0000']
  }

  const columnNames = [
    {
      name: 'Name',
      width: 'md:w-2/5'
    },
    {
      name: 'Price',
      width: 'md:w-1/6'
    },
    {
      name: 'Change',
      width: 'md:w-1/6'
    },
    {
      name: 'Chart',
      width: 'md:w-1/6'
    },
    {
      name: 'Trade',
      width: ''
    }
  ]

  return (
    <div className="overflow-x-auto w-full border border-inherit rounded-xl shadow-md">
      <table className="table w-full">
        <thead>
        <tr>
          {columnNames.map(columns =>
            <th className={`bg-white text-slate-400 font-normal ${columns.width}`} key={columns.name}>
              {columns.name}
            </th>
          )}
        </tr>
        </thead>
        <tbody className="border-b">
        {data && data.map(item =>
          <tr key={item._id}>
            <td className="border-0">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="w-12 h-12">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
                <div>
                  <span className="font-bold">{item.name}</span>
                  <span className="pl-3 opacity-50">{item.shortForm}</span>
                </div>
              </div>
            </td>
            <td className="border-0">{currencyFormatter(item.price)}</td>
            {item.changePercentage > 0 ?
              <td className="border-0 text-green-500">+{item.changePercentage}%</td> :
              <td className="border-0 text-red-500">{item.changePercentage}%</td>
            }
            <td className="border-0">
              <ReactApexCharts
                type='line'
                height='50'
                options={item.changePercentage > 0 ? chartOptions : negativeChartOptions}
                series={[{data: item.history}]}/>
            </td>
            <td className="border-0">
              <button className="btn btn-outline rounded-full w-24 border-slate-300">Buy</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
      <ExploreAssets/>
    </div>
  )
}

export default CryptocurrencyList
