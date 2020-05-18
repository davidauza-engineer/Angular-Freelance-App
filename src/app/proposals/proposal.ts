export class Proposal {
  constructor(
    // tslint:disable:variable-name
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public weeks_to_complete?: number,
    public client_email?: string
    // tslint:enable:variable-name
  ) {}
}

// 15, 'Abc Company', 'http://davidauza.engineer', 'Ruby on Rails', 150, 120, 15, 'davidauza01@gmail.com'
