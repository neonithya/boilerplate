import { Flavor, FlavorConfig, FlavorValues } from 'foundation'
import { startApp } from '../../myApp'

export function main() {
  FlavorConfig.initialize({
    flavor: Flavor.prod,
    values: new FlavorValues({
      apiBaseUrl: 'https://jsonplaceholder.typicode.com/',
      databaseName: '',
      // databaseName: 'boilerplate',
      //secrets: AppSecrets.appSecretsDev,
      showLogs: true,
      logSqlStatements: true
    })
  })
  startApp()
}
main()
