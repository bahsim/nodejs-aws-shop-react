#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CreateCDKStack } from '../lib/cdk-stack';

const app = new cdk.App();
new CreateCDKStack(app, 'app-cdk');
