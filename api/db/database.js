import mysql from 'mysql'

var connection = mysql.createPool({
	host:'db',
	user:'root',
	password:'root',
	database:'matcha',
	typeCast: function castField( field, useDefaultTypeCasting )
	{
		if ( ( field.type === "BIT" ) && ( field.length === 1 ) )
		{
            var bytes = field.buffer();
            return( bytes[ 0 ] === 1 );
        }
        return( useDefaultTypeCasting() );
    }
})

export default connection