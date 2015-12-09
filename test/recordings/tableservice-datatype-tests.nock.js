// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'http://xplat.table.core.windows.net/Tables(\'tabledatatypetestdata0\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '46212f3d-0002-0007-0dc2-f16082000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'http://xplat.table.core.windows.net/Tables(\'tabledatatypetestdata0\')',
  date: 'Fri, 18 Sep 2015 03:28:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .filteringRequestBody(function (path) { return '*';})
.post('/tabledatatypetestdata0', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  etag: 'W/"datetime\'2015-09-18T03%3A28%3A11.198793Z\'"',
  location: 'http://xplat.table.core.windows.net/tabledatatypetestdata0(PartitionKey=\'1\',RowKey=\'3\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ae0f5104-0002-004c-68c2-f15118000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  'preference-applied': 'return-no-content',
  dataserviceid: 'http://xplat.table.core.windows.net/tabledatatypetestdata0(PartitionKey=\'1\',RowKey=\'3\')',
  date: 'Fri, 18 Sep 2015 03:28:11 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=StringValue%20eq%20%27mystring%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '90f58ba5-0002-003d-57c2-f12321000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:11 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=StringValue%20eq%20%27mystring%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e67ffb42-0002-002f-64c2-f1173d000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:11 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=StringValue%20eq%20%27mystring%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3d6ac310-0002-000b-12c2-f18e73000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:11 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=DateValue%20eq%20datetime%272012-11-10T03%3A04%3A05.200Z%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6a6a070b-0002-0038-17c2-f1d75e000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:11 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=DateValue%20eq%20datetime%272012-11-10T03%3A04%3A05.200Z%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fe0702b9-0002-0029-17c2-f1e045000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:12 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=DateValue%20eq%20datetime%272012-11-10T03%3A04%3A05.200Z%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'dac8df35-0002-002e-4fc2-f116c0000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:12 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=BoolValue%20eq%20false')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '48656acb-0002-0033-4ec2-f1cf2a000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:12 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=BoolValue%20eq%20false')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '669044db-0002-000f-27c2-f17bf1000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:13 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=BoolValue%20eq%20false')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '43321610-0002-0015-2dc2-f1549e000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:12 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=Int32Value%20eq%20123')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f4ba63ac-0002-0042-07c2-f1bd13000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:13 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=Int32Value%20eq%20123')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1194fbb6-0002-0047-6cc2-f1496c000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=Int32Value%20eq%20123')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'addbad6b-0002-0037-27c2-f13aa8000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=DoubleValue%20eq%20123.45')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'fdce34c9-0002-0028-3fc2-f1e1b8000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=DoubleValue%20eq%20123.45')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7e7421a1-0002-001a-32c2-f1b968000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=DoubleValue%20eq%20123.45')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7273562f-0002-0046-7ac2-f14891000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:15 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=Int64Value%20eq%204294967296L')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a865dfaa-0002-004b-35c2-f1a79d000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:14 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=Int64Value%20eq%204294967296L')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '160982a8-0002-0014-52c2-f15563000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:16 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=GuidValue%20eq%20guid%27debc44d5-04a9-42ea-ab2f-4e2cb49ff833%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '13691883-0002-0006-4ec2-f1617f000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:15 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=GuidValue%20eq%20guid%27debc44d5-04a9-42ea-ab2f-4e2cb49ff833%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bc2f7bab-0002-001e-53c2-f14cea000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:16 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=BinaryValue%20eq%20X%27010232%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a72c7390-0002-0023-5ac2-f1f9cc000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:16 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/tabledatatypetestdata0?%24filter=BinaryValue%20eq%20X%27010232%27')
  .reply(200, "{\"odata.metadata\":\"http://xplat.table.core.windows.net/$metadata#tabledatatypetestdata0\",\"value\":[{\"PartitionKey\":\"1\",\"RowKey\":\"3\",\"Timestamp\":\"2015-09-18T03:28:11.198793Z\",\"Int32Value\":123,\"DoubleValue\":123.45,\"BoolValue\":false,\"StringValue\":\"mystring\",\"DateValue@odata.type\":\"Edm.DateTime\",\"DateValue\":\"2012-11-10T03:04:05.2Z\",\"GuidValue@odata.type\":\"Edm.Guid\",\"GuidValue\":\"debc44d5-04a9-42ea-ab2f-4e2cb49ff833\",\"Int64Value@odata.type\":\"Edm.Int64\",\"Int64Value\":\"4294967296\",\"BinaryValue@odata.type\":\"Edm.Binary\",\"BinaryValue\":\"AQIy\"}]}", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '32540fba-0002-0000-12c2-f19607000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:16 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .get('/Tables(%27tabledatatypetestdata0%27)')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\"?><entry xml:base=\"http://xplat.table.core.windows.net/\" xmlns=\"http://www.w3.org/2005/Atom\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\"><id>http://xplat.table.core.windows.net/Tables('tabledatatypetestdata0')</id><category term=\"xplat.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" /><link rel=\"edit\" title=\"Tables\" href=\"Tables('tabledatatypetestdata0')\" /><title /><updated>2015-09-18T03:28:17Z</updated><author><name /></author><content type=\"application/xml\"><m:properties><d:TableName>tabledatatypetestdata0</d:TableName></m:properties></content></entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;type=entry;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a77521dd-0002-002d-0dc2-f115c7000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:16 GMT' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:80')
  .delete('/Tables(%27tabledatatypetestdata0%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '93e7d313-0002-0032-4bc2-f1ced7000000',
  'x-ms-version': '2015-02-21',
  'x-content-type-options': 'nosniff',
  date: 'Fri, 18 Sep 2015 03:28:17 GMT' });
 return result; }]];