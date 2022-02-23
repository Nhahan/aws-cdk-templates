import { Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class SimpleLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this, 'InlineLambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          console.log('Hello from Lambda. event:', event);
        }
      `),
      handler: 'handler',
    });
  }
}