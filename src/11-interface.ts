interface Driver {
  database: string
  password: string
  port: number
  connect(): void
  disconnect():void
  isConnected(name:string): boolean
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number//no esta en la interface
  ){}
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return false
  }

  connect(): void {
      //code
  }
}