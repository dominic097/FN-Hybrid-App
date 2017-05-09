/**
 * Created by Dominic on 5/8/2017.
 */



export  interface ServiceProvider {
  url: string,
  type: string,
  contentType: string,
  payLoad?: any
  cb?: {(success:any, error:any) : any}
}
